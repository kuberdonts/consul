import Route from 'consul-ui/routing/route';

export default class HealthchecksRoute extends Route {
  queryParams = {
    sortBy: 'sort',
    status: 'status',
    kind: 'kind',
    check: 'check',
    searchproperty: {
      as: 'searchproperty',
      empty: [['Name', 'CheckID', 'Notes', 'Output', 'ServiceTags']],
    },
    search: {
      as: 'filter',
      replace: true,
    },
  };

  model() {
    const parent = this.routeName
      .split('.')
      .slice(0, -1)
      .join('.');
    return this.modelFor(parent);
  }

  setupController(controller, model) {
    super.setupController(...arguments);
    controller.setProperties(model);
  }
}
