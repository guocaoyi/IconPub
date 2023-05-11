export class Role {
  constructor(name: string, writeable: boolean, readable: boolean, deletable: boolean) {
    this.name = name
    this.writeable = writeable ?? false
    this.readable = readable ?? true
    this.deletable = deletable ?? false
  }

  name: string

  writeable: boolean

  readable: boolean

  deletable: boolean
}
