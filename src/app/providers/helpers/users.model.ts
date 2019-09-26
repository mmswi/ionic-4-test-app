export class UserModel {
  id: number;
  name: string;
  email: string;
  website: string;
  constructor(values: Object = {}) {
    this.id = values["id"];
    this.name = values["name"];
    this.email = values["email"];
    this.website = values["website"];
  }
}
