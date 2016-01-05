const {Route} = ReactRouter;

const MonsterPicker = React.createClass({
    getInitialState() {
        return {
            selectedMonster: -1
        };
    },
    pick() {
        const {selectedMonster} = this.state;
        if (selectedMonster === -1) {
            Dialog.alert("Need to pick a pokemanz");
            return;
        }

        App.storage.set("starter", selectedMonster);
        App.transitionTo("/game");
    },
    render() {
        const {selectedMonster} = this.state;

        return (
            <div>
                <UI.RadioGroup selectedIndex={selectedMonster} onChange={selectedMonster => this.setState({selectedMonster})} layout="grid" rowCount={1} colCount={3} height="50%" label="Pick a pokemanz">
                    <UI.Option>
                        <UI.CenterContent height={40} width="100%">Bulbasaur</UI.CenterContent>
                        <UI.Image source="http://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png" height="calc(100% - 40px)" />
                    </UI.Option>

                    <UI.Option>
                        <UI.CenterContent height={40} width="100%">Charmander</UI.CenterContent>
                        <UI.Image source="http://cdn.bulbagarden.net/upload/7/73/004Charmander.png" height="calc(100% - 40px)" />
                    </UI.Option>

                    <UI.Option>
                        <UI.CenterContent height={40} width="100%">Squirtle</UI.CenterContent>
                        <UI.Image source="http://cdn.bulbagarden.net/upload/3/39/007Squirtle.png" height="calc(100% - 40px)" />
                    </UI.Option>
                </UI.RadioGroup>
                <UI.Button raised block text="Pick Dat Pokemanz" onTap={this.pick} />
            </div>
        );
    }
});

const Game = () => {
    const starter = App.storage.get("starter");
    const starterNames = ["Bulbasaur", "Charmander", "Squirtle"];

    return <div>You picked {starterNames[starter]}</div>;
};

App.start(
    <Route>
        <Route path="/" component={MonsterPicker} />
        <Route path="/game" component={Game} />
    </Route>
);
