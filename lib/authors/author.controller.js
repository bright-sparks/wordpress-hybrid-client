import AbstractList from '../abstract/AbstractList.js';

export default class extends AbstractList {

    constructor($WPHCPosts, $WPHCConfig, $q, $scope, $filter, $stateParams, $WPHCAuthor) {
        'ngInject';

        super($WPHCConfig, $q, $scope, $stateParams);
        this.setType('authorPosts');
        this.setService($WPHCPosts);
        this.$filter = $filter;
        this.author = undefined;
        this.$WPHCAuthor = $WPHCAuthor;
        this.getAuthor();
        // this.setTitle(this.getTitle($stateParams.term, $stateParams.slug));
    }

    getAuthor() {
        var self = this;
        this.$WPHCAuthor.get(this.$stateParams.id).then((response) => {
            self.author = response.data;
            self.setTitle(this.$filter('translate')('author.title', {
                name: response.data.name
            }));
        });
    }

    getQuery() {
        var query = super.getQuery();
        query["filter[author]"] = this.$stateParams.id
        return query;
    }
}
