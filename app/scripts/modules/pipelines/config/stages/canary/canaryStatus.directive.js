'use strict';

angular.module('deckApp.pipelines.stages.canary.status.directive', [])
  .directive('canaryStatus', function() {
    return {
      restrict: 'E',
      scope: {
        status: '='
      },
      template: '<span class="label label-default label-{{statusLabel}}">{{status}}</span>',
      link: function(scope) {
        function applyLabel() {
          scope.statusLabel = scope.status === 'LAUNCHED' ? 'launched'
            : scope.status === 'COMPLETED' ? 'completed'
            : scope.status === 'FAILED' ? 'failed'
            : scope.status === 'CANCELED' ? 'canceled'
            : 'unknown';
        }
        scope.$watch('status', applyLabel);
      }
    };
  });