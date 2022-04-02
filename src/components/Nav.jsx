import logo from '../images/logo.svg';
function Nav(){
    return (
        <div className="p-4 shadow-md bg-gradient-to-r from-purple-900 to-purple-600">
            <div className="flex items-center">
                <img src={logo} alt='logo' />
                <span className="pl-2 text-white text-2xl font-bold">Meme Generator</span>
                <p className="ml-auto text-white font-medium">Built By Virgo</p>
            </div>
            
        </div>
    )

}

export default Nav;