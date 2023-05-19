
export default function Logo() {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    
    return (
        <div>
            <img  src={logoURL} style={{width:75}} alt="Flipkart" title="Flipkart" ></img>
        </div>
    );
}