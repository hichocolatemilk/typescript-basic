//서버에서 다른 서버로 정보
//프론트에서 서버로 -> json object

class LoginTransfer {
  constructor(public readonly ID: string, public readonly PW: string) {
    this.ID = ID;
    this.PW = PW;
  }
}

const LoginDTO = new LoginTransfer("HI", "1234");
console.log(LoginDTO);
