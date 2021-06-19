module.exports = {
    internal: { http: 500, code: "INTERNAL_ERROR", message: "Internal error", userFriendly: "Erreur interne" },
    badUrl: { http: 400, code: "BAD_URL", message: "Bad URL", userFriendly: "Votre URL n'est pas dans le bon format" },
    notFound: { http: 404, code: 'NOT_FOUND', message: "Not found", userFriendly: "Ressource non trouvée" },
}