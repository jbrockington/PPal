/*
 ProgressPal
 File: C3 Chart init js
 */

 !function($) {
    "use strict";

    var ChartC3 = function() {};

    ChartC3.prototype.init = function () {
        // Define static data for each week
        var weekPieData = {
            'Week 1': [
                ['Studying', 50],
                ['Exercising', 25],
                ['Reading', 25],
                ['Volunteering', 30]
            ],
            'Week 2': [
                ['Studying', 40],
                ['Exercising', 30],
                ['Reading', 20],
                ['Volunteering', 50]
            ],
            'Week 3': [
                ['Studying', 60],
                ['Exercising', 40],
                ['Reading', 35],
                ['Volunteering', 25]
            ],
            'Week 4': [
                ['Studying', 70],
                ['Exercising', 20],
                ['Reading', 30],
                ['Volunteering', 50]
            ],
            'Week 5': [
                ['Studying', 80],
                ['Exercising', 35],
                ['Reading', 15],
                ['Volunteering', 45]
            ],
            'Week 6': [
                ['Studying', 90],
                ['Exercising', 50],
                ['Reading', 20],
                ['Volunteering', 30]
            ]
        };

        // Generate the bar chart
        var barChart = c3.generate({
            bindto: '#chart',
            data: {
                columns: [
                    ['Actual', 20, 30, 65, 40, 45, 60],
                    ['Expected', 25, 35, 60, 55, 65, 80]
                ],
                type: 'bar',
                colors: {
                    Expected: '#365d6e',
                    Actual: '#59ceb5',
                },
                onclick: function(d) {
                    // Get the category (week) for the clicked bar
                    var week = barChart.categories()[d.index];
                    if (weekPieData[week]) {
                        // Load the static pie chart data for the clicked week
                        pieChart.load({
                            columns: weekPieData[week]
                        });
                    }
                }
            },
            axis: {
                x: {
                    type: 'category',
                    categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6']
                },
                y: {
                    label: {
                        text: 'Hours',
                        position: 'outer-middle'
                    }
                }
            }
        });

        // Generate the pie chart
        var pieChart = c3.generate({
            bindto: '#pie-chart',
            data: {
                columns: weekPieData['Week 1'], // Default to Week 1 data
                type: 'pie'
            },
            color: {
                pattern: ['#aaaaaa', "#eef0f6", '#59ceb5', '#365d6e']
            },
            pie: {
                label: {
                    show: false
                }
            }
        });
    };

    $.ChartC3 = new ChartC3, $.ChartC3.Constructor = ChartC3;

}(window.jQuery),

// Initializing
function($) {
    "use strict";
    $.ChartC3.init();
}(window.jQuery);




