import { Request, Response } from "express";
import { Url } from "../entity/URL";

//Faz o serviço de diminuir a url e guardar no banco
export const URLShortener = async (req: Request, res: Response) => {
  const url = req.body.url;

  const checker = await urlChecker(url);

  var dateToday = new Date();

  // Checa a data e caso tenha expirado deleta do banco
  if (checker) {
    if (dateToday < checker.expiresDate) {
      return res.send(`Resgatado no banco como: ${checker.newUrl}`);
    } else if (dateToday > checker.expiresDate) {
      Url.delete(checker);
    }
  }

  const randomNumber = Math.floor(Math.random() * (11 - 5) + 5); // Entre 5 and 10
  const shorterURL = generateRandomString(randomNumber);

  var expiresDate = new Date();
  expiresDate.setFullYear(expiresDate.getFullYear() + 1);
  try {
    Url.insert({
      url,
      newUrl: `http://localhost:8081/${shorterURL}`,
      expiresDate,
    });
  } catch (err) {
    return res
      .status(404)
      .send(`Não foi possivel inserir no banco de dados: ${err} `);
  }

  return res.send(
    `Inserido no banco como: http://localhost:8081/${shorterURL}`
  );
};

//Pega a URL e redireciona para a página guardada no banco de dados
export const GetURL = async (req: Request, res: Response) => {
  const localhost = "http://localhost:8081";
  const url = await Url.findOne({ newUrl: `${localhost}/${req.params.url}` });

  try {
    res.writeHead(301, { Location: url?.url });
    res.end();
    return;
  } catch (err) {
    return res
      .status(404)
      .send(`Não foi possível achar a pagina: ${err.message}`);
  }
};

//Gera uma string com números e letras
const generateRandomString = (length: number) => {
  return Math.random().toString(20).substr(2, length);
};

// Checa se já existe uma Url igual guardada no banco
const urlChecker = async (fullUrl: String) => {
  try {
    const check = await Url.findOne({ url: `${fullUrl}` });
    if (check) return check;
  } catch (err) {
    return false;
  }
  return false;
};
