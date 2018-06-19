import controller from './series-list.controller'
export const SeriesListComponent = {
    bindings:{
      seriesResult: '<'
    },
    controller,
    template:`
    <h1>Series List </h1>
    <div class="container-fluid">
        <div class="row">
            <series-item class="col-sm-4" ng-repeat="series in $ctrl.seriesResult" data="series">      
        </series-item>
            </div>
        </div>
    `
}