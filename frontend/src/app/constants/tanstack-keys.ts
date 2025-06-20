export const TANSTACK_KEY = {
  agent: {
    post: "register-agents",
    fetch_many: "fetch-agents",
    fetch_infinite: "fetch-infinite-agents",
    update: "edit-agent",
    delete: "remove-agent",
  },
  revision: {
    post: "make-revision",
    fetch_many: "fetch-many-revisions",
    update: "edit-revision",
    delete: "remove-revision",
  },
  terminal: {
    post: "add-terminal",
    fetch_many: "fetch-many-terminals",
    fetch_infinite: "fetch-infinite-terminals",
    update: "edit-terminal",
    delete: "remove-terminal",
  },
  pos: {
    post: "add-pos",
    fetch_many: "fetch-many-pos",
    fetch_by_bounds: "fetch-by-bounds",
    get_by_id: "get-pos-by-id",
    fetch_infinite: "fetch-infinite-pos",
    update: "edit-pos",
    delete: "remove-pos",
  },
  province: {
    fetch_many: "fetch-many-provinces",
  },
  types: {
    fetch_many: "fetch-many-types",
  },
  administration: {
    fetch_many: "fetch-many-administrations",
  },
  licence: {
    post: "add-licence",
    update: "edit-licence",
    delete: "remove-licence",
    get_by_id: "get-licence-by-id",
    fetch_many: "fetch-many-licences",
    fetch_infinite: "fetch-infinite-licences",
  },
  zone: {
    fetch_many: "fetch-many-zones",
  },
  area: {
    fetch_many: "fetch-many-areas",
  },
  city: {
    fetch_many: "fetch-many-cities",
  },
}
