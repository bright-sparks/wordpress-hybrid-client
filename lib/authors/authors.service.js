import AbstractList from '../abstract/AbstractListService.js';

export default class extends AbstractList {
    constructor($WPHCConfig, $q, CacheFactory, $log, $wpApiUsers) {
        'ngInject';

        super($WPHCConfig, $q, CacheFactory, $log);
        this.setType('authors');
        this.setService($wpApiUsers);
    }
}
