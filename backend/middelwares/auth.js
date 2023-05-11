import jwt from "jsonwebtoken"

const {sign, verify} = jwt

export const createToken = (userId) => {
  const authToken = sign({userId}, process.env.SECRET_KEY, {expiresIn: "5d"})
  return authToken
}

export const userAuthValidation = (req, res, next) => {
  console.log(req);
  const authToken = req.cookies["authToken"].authToken
  console.log(authToken);

  if (!authToken) {
    throw Error("no auth for this action")
  }

  const decodedToken = verify(authToken, process.env.SECRET_KEY)

  if (!decodedToken) {
    throw Error("no auth for this action")
  }

  res.locals.userId = decodedToken.userId
  next()
}