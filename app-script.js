(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _ReactRouter = ReactRouter;
var Route = _ReactRouter.Route;

var MonsterPicker = React.createClass({
    displayName: "MonsterPicker",

    getInitialState: function getInitialState() {
        return {
            selectedMonster: -1
        };
    },
    pick: function pick() {
        var selectedMonster = this.state.selectedMonster;

        if (selectedMonster === -1) {
            Dialog.alert("Need to pick a pokemanz");
            return;
        }

        App.storage.set("starter", selectedMonster);
        App.transitionTo("/game");
    },
    render: function render() {
        var _this = this;

        var selectedMonster = this.state.selectedMonster;

        return React.createElement(
            "div",
            null,
            React.createElement(
                UI.RadioGroup,
                { selectedIndex: selectedMonster, onChange: function (selectedMonster) {
                        return _this.setState({ selectedMonster: selectedMonster });
                    }, layout: "grid", rowCount: 1, colCount: 3, height: "50%", label: "Pick a pokemanz" },
                React.createElement(
                    UI.Option,
                    null,
                    React.createElement(
                        UI.CenterContent,
                        { height: 40, width: "100%" },
                        "Bulbasaur"
                    ),
                    React.createElement(UI.Image, { source: "http://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png", height: "calc(100% - 40px)" })
                ),
                React.createElement(
                    UI.Option,
                    null,
                    React.createElement(
                        UI.CenterContent,
                        { height: 40, width: "100%" },
                        "Charmander"
                    ),
                    React.createElement(UI.Image, { source: "http://cdn.bulbagarden.net/upload/7/73/004Charmander.png", height: "calc(100% - 40px)" })
                ),
                React.createElement(
                    UI.Option,
                    null,
                    React.createElement(
                        UI.CenterContent,
                        { height: 40, width: "100%" },
                        "Squirtle"
                    ),
                    React.createElement(UI.Image, { source: "http://cdn.bulbagarden.net/upload/3/39/007Squirtle.png", height: "calc(100% - 40px)" })
                )
            ),
            React.createElement(UI.Button, { raised: true, block: true, text: "Pick Dat Pokemanz", onTap: this.pick })
        );
    }
});

var Game = function Game() {
    var starter = App.storage.get("starter");
    var starterNames = ["Bulbasaur", "Charmander", "Squirtle"];

    return React.createElement(
        "div",
        null,
        "You picked ",
        starterNames[starter]
    );
};

App.start(React.createElement(
    Route,
    null,
    React.createElement(Route, { path: "/", component: MonsterPicker }),
    React.createElement(Route, { path: "/game", component: Game })
));

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9BeGVsMS9Eb2N1bWVudHMvcHJvZ3JhbW1pbmcvZ2l0aHViL1Bva2VtYW56L2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OzttQkNBZ0IsV0FBVztJQUFwQixLQUFLLGdCQUFMLEtBQUs7O0FBRVosSUFBTSxhQUFhLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7O0FBQ3BDLG1CQUFlLEVBQUEsMkJBQUc7QUFDZCxlQUFPO0FBQ0gsMkJBQWUsRUFBRSxDQUFDLENBQUM7U0FDdEIsQ0FBQztLQUNMO0FBQ0QsUUFBSSxFQUFBLGdCQUFHO1lBQ0ksZUFBZSxHQUFJLElBQUksQ0FBQyxLQUFLLENBQTdCLGVBQWU7O0FBQ3RCLFlBQUksZUFBZSxLQUFLLENBQUMsQ0FBQyxFQUFFO0FBQ3hCLGtCQUFNLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7QUFDeEMsbUJBQU87U0FDVjs7QUFFRCxXQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsZUFBZSxDQUFDLENBQUM7QUFDNUMsV0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUM3QjtBQUNELFVBQU0sRUFBQSxrQkFBRzs7O1lBQ0UsZUFBZSxHQUFJLElBQUksQ0FBQyxLQUFLLENBQTdCLGVBQWU7O0FBRXRCLGVBQ0k7OztZQUNJO0FBQUMsa0JBQUUsQ0FBQyxVQUFVO2tCQUFDLGFBQWEsRUFBRSxlQUFlLEFBQUMsRUFBQyxRQUFRLEVBQUUsVUFBQSxlQUFlOytCQUFJLE1BQUssUUFBUSxDQUFDLEVBQUMsZUFBZSxFQUFmLGVBQWUsRUFBQyxDQUFDO3FCQUFBLEFBQUMsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBRSxDQUFDLEFBQUMsRUFBQyxRQUFRLEVBQUUsQ0FBQyxBQUFDLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsaUJBQWlCO2dCQUN0TDtBQUFDLHNCQUFFLENBQUMsTUFBTTs7b0JBQ047QUFBQywwQkFBRSxDQUFDLGFBQWE7MEJBQUMsTUFBTSxFQUFFLEVBQUUsQUFBQyxFQUFDLEtBQUssRUFBQyxNQUFNOztxQkFBNkI7b0JBQ3ZFLG9CQUFDLEVBQUUsQ0FBQyxLQUFLLElBQUMsTUFBTSxFQUFDLHlEQUF5RCxFQUFDLE1BQU0sRUFBQyxtQkFBbUIsR0FBRztpQkFDaEc7Z0JBRVo7QUFBQyxzQkFBRSxDQUFDLE1BQU07O29CQUNOO0FBQUMsMEJBQUUsQ0FBQyxhQUFhOzBCQUFDLE1BQU0sRUFBRSxFQUFFLEFBQUMsRUFBQyxLQUFLLEVBQUMsTUFBTTs7cUJBQThCO29CQUN4RSxvQkFBQyxFQUFFLENBQUMsS0FBSyxJQUFDLE1BQU0sRUFBQywwREFBMEQsRUFBQyxNQUFNLEVBQUMsbUJBQW1CLEdBQUc7aUJBQ2pHO2dCQUVaO0FBQUMsc0JBQUUsQ0FBQyxNQUFNOztvQkFDTjtBQUFDLDBCQUFFLENBQUMsYUFBYTswQkFBQyxNQUFNLEVBQUUsRUFBRSxBQUFDLEVBQUMsS0FBSyxFQUFDLE1BQU07O3FCQUE0QjtvQkFDdEUsb0JBQUMsRUFBRSxDQUFDLEtBQUssSUFBQyxNQUFNLEVBQUMsd0RBQXdELEVBQUMsTUFBTSxFQUFDLG1CQUFtQixHQUFHO2lCQUMvRjthQUNBO1lBQ2hCLG9CQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUMsTUFBTSxNQUFBLEVBQUMsS0FBSyxNQUFBLEVBQUMsSUFBSSxFQUFDLG1CQUFtQixFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxBQUFDLEdBQUc7U0FDbkUsQ0FDUjtLQUNMO0NBQ0osQ0FBQyxDQUFDOztBQUVILElBQU0sSUFBSSxHQUFHLFNBQVAsSUFBSSxHQUFTO0FBQ2YsUUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDM0MsUUFBTSxZQUFZLEdBQUcsQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUFDOztBQUU3RCxXQUFPOzs7O1FBQWlCLFlBQVksQ0FBQyxPQUFPLENBQUM7S0FBTyxDQUFDO0NBQ3hELENBQUM7O0FBRUYsR0FBRyxDQUFDLEtBQUssQ0FDTDtBQUFDLFNBQUs7O0lBQ0Ysb0JBQUMsS0FBSyxJQUFDLElBQUksRUFBQyxHQUFHLEVBQUMsU0FBUyxFQUFFLGFBQWEsQUFBQyxHQUFHO0lBQzVDLG9CQUFDLEtBQUssSUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBRSxJQUFJLEFBQUMsR0FBRztDQUNuQyxDQUNYLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY29uc3Qge1JvdXRlfSA9IFJlYWN0Um91dGVyO1xuXG5jb25zdCBNb25zdGVyUGlja2VyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNlbGVjdGVkTW9uc3RlcjogLTFcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIHBpY2soKSB7XG4gICAgICAgIGNvbnN0IHtzZWxlY3RlZE1vbnN0ZXJ9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgaWYgKHNlbGVjdGVkTW9uc3RlciA9PT0gLTEpIHtcbiAgICAgICAgICAgIERpYWxvZy5hbGVydChcIk5lZWQgdG8gcGljayBhIHBva2VtYW56XCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgQXBwLnN0b3JhZ2Uuc2V0KFwic3RhcnRlclwiLCBzZWxlY3RlZE1vbnN0ZXIpO1xuICAgICAgICBBcHAudHJhbnNpdGlvblRvKFwiL2dhbWVcIik7XG4gICAgfSxcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtzZWxlY3RlZE1vbnN0ZXJ9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8VUkuUmFkaW9Hcm91cCBzZWxlY3RlZEluZGV4PXtzZWxlY3RlZE1vbnN0ZXJ9IG9uQ2hhbmdlPXtzZWxlY3RlZE1vbnN0ZXIgPT4gdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRNb25zdGVyfSl9IGxheW91dD1cImdyaWRcIiByb3dDb3VudD17MX0gY29sQ291bnQ9ezN9IGhlaWdodD1cIjUwJVwiIGxhYmVsPVwiUGljayBhIHBva2VtYW56XCI+XG4gICAgICAgICAgICAgICAgICAgIDxVSS5PcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VUkuQ2VudGVyQ29udGVudCBoZWlnaHQ9ezQwfSB3aWR0aD1cIjEwMCVcIj5CdWxiYXNhdXI8L1VJLkNlbnRlckNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VUkuSW1hZ2Ugc291cmNlPVwiaHR0cDovL2Nkbi5idWxiYWdhcmRlbi5uZXQvdXBsb2FkLzIvMjEvMDAxQnVsYmFzYXVyLnBuZ1wiIGhlaWdodD1cImNhbGMoMTAwJSAtIDQwcHgpXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9VSS5PcHRpb24+XG5cbiAgICAgICAgICAgICAgICAgICAgPFVJLk9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxVSS5DZW50ZXJDb250ZW50IGhlaWdodD17NDB9IHdpZHRoPVwiMTAwJVwiPkNoYXJtYW5kZXI8L1VJLkNlbnRlckNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VUkuSW1hZ2Ugc291cmNlPVwiaHR0cDovL2Nkbi5idWxiYWdhcmRlbi5uZXQvdXBsb2FkLzcvNzMvMDA0Q2hhcm1hbmRlci5wbmdcIiBoZWlnaHQ9XCJjYWxjKDEwMCUgLSA0MHB4KVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvVUkuT3B0aW9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDxVSS5PcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VUkuQ2VudGVyQ29udGVudCBoZWlnaHQ9ezQwfSB3aWR0aD1cIjEwMCVcIj5TcXVpcnRsZTwvVUkuQ2VudGVyQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxVSS5JbWFnZSBzb3VyY2U9XCJodHRwOi8vY2RuLmJ1bGJhZ2FyZGVuLm5ldC91cGxvYWQvMy8zOS8wMDdTcXVpcnRsZS5wbmdcIiBoZWlnaHQ9XCJjYWxjKDEwMCUgLSA0MHB4KVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvVUkuT3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvVUkuUmFkaW9Hcm91cD5cbiAgICAgICAgICAgICAgICA8VUkuQnV0dG9uIHJhaXNlZCBibG9jayB0ZXh0PVwiUGljayBEYXQgUG9rZW1hbnpcIiBvblRhcD17dGhpcy5waWNrfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cbmNvbnN0IEdhbWUgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RhcnRlciA9IEFwcC5zdG9yYWdlLmdldChcInN0YXJ0ZXJcIik7XG4gICAgY29uc3Qgc3RhcnRlck5hbWVzID0gW1wiQnVsYmFzYXVyXCIsIFwiQ2hhcm1hbmRlclwiLCBcIlNxdWlydGxlXCJdO1xuXG4gICAgcmV0dXJuIDxkaXY+WW91IHBpY2tlZCB7c3RhcnRlck5hbWVzW3N0YXJ0ZXJdfTwvZGl2Pjtcbn07XG5cbkFwcC5zdGFydChcbiAgICA8Um91dGU+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17TW9uc3RlclBpY2tlcn0gLz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvZ2FtZVwiIGNvbXBvbmVudD17R2FtZX0gLz5cbiAgICA8L1JvdXRlPlxuKTtcbiJdfQ==
