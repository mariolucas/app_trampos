import RESTSerializer from '@ember-data/serializer/rest';

export default class ApplicationSerializer extends RESTSerializer {
  // Ajuste os métodos abaixo conforme o formato da sua API

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    // Caso o payload da API tenha um formato customizado, ajuste aqui
    return super.normalizeResponse(
      store,
      primaryModelClass,
      payload,
      id,
      requestType,
    );
  }
}
