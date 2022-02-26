export default class ApiError extends Error {
    constructor(status, message, errors = []) {
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static UnauthorizedError() {
        return new ApiError(401, 'Пользователь не авторизован');
    }

    static BadRequest(message, errors = []) {
        return new ApiError(400, message, errors);
    }

    static ValidationError(message, errors = []) {
        return new ApiError(422, message, errors);
    }

    static NotFound(message, errors = []) {
        return new ApiError(404, message, errors);
    }

    static Forbidden(message, errors = []) {
        return new ApiError(403, message, errors);
    }
}