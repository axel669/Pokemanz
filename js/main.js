const {Route} = ReactRouter;

const MonsterPicker = React.createClass({
    getInitialState() {
        return {
            selectedMonster: -1
        };
    },
    render() {
        return (
            <div>
                Random?
            </div>
        );
    }
});

App.start(
    <Route path="/" component={MonsterPicker} />
);
