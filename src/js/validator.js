export class Validator {
  validateUsername(username) {
    const re = /^[a-zA-Z][a-zA-Z\d_-]*[a-zA-Z]$/;
    return re.test(username) && !/\d{4,}/.test(username);
  }
}
