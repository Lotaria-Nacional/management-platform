export const TANSTACK_KEY = {
  agent: {
    post: "register-agents",
    fetch_many: "fetch-agents",
    update: "edit-agent",
    delete: "remove-agent",
  },
  revision: {
    post: "make-revision",
    fetch_many:"fetch-many-revisions",
    update: "edit-revision",
    delete: "remove-revision",
  },
  terminal: {
    post: "add-terminal",
    fetch_many: "fetch-many-terminals",
    update: "edit-terminal",
    delete: "remove-terminal",
  },
  pos: {
    post: "add-pos",
    fetch_many: "fetch-many-pos",
    get_by_id: "get-pos-by-id",
    update: "edit-pos",
    delete: "remove-pos",
  },
}
