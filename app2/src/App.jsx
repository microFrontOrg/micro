export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                应用2
            </div>
        )
    }
}

const Header = styled.div`
    height: 60px;
    text-align: center;
    line-height: 60px;
    font-size: 24px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
`

const Slider = styled.div`
    position: fixed;
    left: 0;
    top: 60px;
    bottom: 0;
    width: 220px;
`

const Content = styled.div`
    position: fixed;
    left: 220px;
    right: 0;
    bottom: 0;
    top: 60px;
    padding: 20px;
`

const Menu = styled.ul`
    list-style: none;
    padding: 10px 20px;
`
const MenuItem = styled.li`
    margin: 6px;
    cursor: pointer;
`