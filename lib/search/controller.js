import AbstractList from '../abstract/AbstractList.js';

export default class extends AbstractList {

    constructor($WPHCSearch, $WPHCConfig, $q, $scope, $filter, $stateParams) {
        'ngInject';

        super($WPHCConfig, $q, $scope, $stateParams);
        this.searchQuery = '';
        this.showToolbar = true;
        this.setType('search');
        this.setTitle($filter('translate')('search.title'));
        this.setService($WPHCSearch);
        this.$filter = $filter;
    }

    getQuery() {
        let query = super.getQuery();
        query['filter[s]'] = this.searchQuery;
        return query;
    }

    clearSearch () {
        this.searchQuery = ''
    }

    search () {
        if (this.searchQuery) {
            this.setTitle(this.$filter('translate')('search.titleQuery', {
                query: this.searchQuery
            }));
            this.list = null;
        } else {
            this.setTitle(this.$filter('translate')('posts.title'));
        }
    }

}
