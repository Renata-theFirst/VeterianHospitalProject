export {} ;

/* import {Component} from 'react';
import slider1 from './img/slider1.jpg';
import slider2 from './img/slider2.jpg';

class Advert extends Component {
    state={
       img: `${slider1}`,
        text: 'Повторный прием специалиста со скидкой 20%'
    };

    componentDidMount(){
        this.timerId = setInterval(this.updateAdv, 4000);
    };

    componentWillUnmount(){
        clearInterval(this.timerId);
    };
    
    updateAdv = () => {
        this.setState({
            img:`${slider1}` ? `${slider2}`: `${slider1}`,
            text:'Повторный прием специалиста со скидкой 20%'? 
                        'Наша клиника работает круглосуточно'
                        :'Повторный прием специалиста со скидкой 20%'
        }); 
        console.log("I'm here!")
    };
    
    render() {
        return(
            <div style={{
                display: 'flexbox',
                flexDirection: 'column',
                justifyContent:'center',
                width:'auto',
                margin: 'auto',
                padding: 'auto'
            }}>
                <img 
                    src={this.state.img}
                    style={{
                        display:'flex', 
                        width:'1000px',
                        margin:'auto',
                        padding: 'auto',
                        border:'thick double rgba(0, 51, 102, 1)'
                    }} 
                    alt="advertising"
                />
                <div 
                    style={{
                        display: 'block',
                        margin:'-150px 0 0 320px',
                        width: '400px',
                        height:'150px',
                        fontFamily:'sans-serif',
                        fontWeight: 'bold',
                        fontSize:'2em',
                        color:'rgba(0, 51, 102, .7)'
                    }}
                >
                    {this.state.text}
                </div>
                
            </div>
        );
    }
}

export default Advert;  */