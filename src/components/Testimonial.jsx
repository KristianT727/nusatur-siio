import React, {Fragment,useState} from 'react'
import "../styles/Testimonial.css"

const Testimonial = () => {

    const [toggletab, setToggleTab] = useState(1)

    const toggleState = (index) =>{
        setToggleTab(index)
    }

    return (
        <Fragment>

            <section className="testimonial">
                <div className="container">
                
                <div className="tabs">

                <div className={toggletab === 1 ? "single-tab active-tab" : "single-tab"}
                onClick = {() => toggleState(1)}
                ></div>
                
                <div className={toggletab === 2 ? "single-tab active-tab" : "single-tab"}
                onClick = {() => toggleState(2)}
                ></div>

                <div className={toggletab === 3 ? "single-tab active-tab" : "single-tab"}
                onClick = {() => toggleState(3)}
                ></div>
                </div>

                <div className="tab-content">

                <div className={toggletab === 1 ? "content active-content" : "content"}>
                    <div className="user-text">
                        <p>"Paket 1 hari bersama nusatur asyiik bgt deh😍 dgn service nya recommended..sukses buat nusatur" </p>
                        <h4>Agung Hendrawan</h4>
                    </div>
                </div>

                <div className={toggletab === 2 ? "content active-content" : "content"}>
                <div className="user-text">
                    <p>"Baru pertama kali gunakan nusatur pelayanan timnya sdh pro.. Selama 1 hari di bali semua sudah diatur waktunya, ga nyesel pake nusatur pantas utk direkomendasikan 👏👏"</p>
                    <h4>Syahputra Aji</h4>
                </div>
                </div>

                <div className={toggletab === 3 ? "content active-content" : "content"}>
                <div className="user-text">
                    <p>"Pelayanan yang diberikan sangat baik, begitu pula dengan wisatanya yang membuat saya ingin kembali berlibur"</p>
                    <h4>Amelia Dermawan</h4>
                </div>
                </div>
                
                </div>
                
                </div>
            </section>
        
        </Fragment>
    )
}

export default Testimonial