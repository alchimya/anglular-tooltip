/**
 * Created by domenicovacchiano on 12/02/15.
 */

var tooltipController=angular.module('myApp.ToolTipController',[]);
tooltipController.controller('ToolTipController',function($scope){
    $scope.countries=[
        {
            "name":"Italy",
            "capital":"Rome"
        },
        {
            "name":"Greek",
            "capital":"Athens"
        },
        {
            "name":"Malta",
            "capital":"La Valletta"
        },
        {
            "name":"Sweden",
            "capital":"Stockholm"
        },
        {
            "name":"Germany",
            "capital":"Berlin"
        }
    ];

    $scope.$on('ngDvTooltip_MouseMove',function(event,data){
        var element=data.tooltipElement;
        console.log(element);
    });
    $scope.$on('ngDvTooltip_MouseOut',function(event){
        console.log("tooltipMouseOut");
    });
});