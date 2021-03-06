import Var from "./var";

let groups = {};

export default function group(groupName) {
  if (!groups.hasOwnProperty(groupName)) {
    groups[groupName] = new Group(groupName);
  }
  return groups[groupName];
}

class Group {
  constructor(name) {
    this.name = name;
    this._vars = {};
  }

  var(name) {
    if (typeof(name) !== "string") {
      throw new Error("Invalid var name");
    }

    if (!this._vars.hasOwnProperty(name))
      this._vars[name] = new Var(this, name);
    return this._vars[name];
  }

  has(name) {
    if (typeof(name) !== "string") {
      throw new Error("Invalid var name");
    }

    return this._vars.hasOwnProperty(name);
  }
}
