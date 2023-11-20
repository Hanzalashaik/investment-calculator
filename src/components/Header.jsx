import logo from "../assets/investment-calculator-logo.png"
export default function Header() {
    return (
        <div id="header">

            <img src={logo} alt="logo" />
            <header>Investment Calculator</header>
        </div>
    )
}