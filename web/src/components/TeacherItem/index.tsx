import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/18684743?s=460&u=b49f87705955b44754d888366a50248748ae021d&v=4" alt="Jadson Santos" />
                <div>
                    <strong>Jadson Santos</strong>
                    <span>Física</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    <br /><br />
                    Phasellus dapibus, orci nec pellentesque consequat, orci arcu maximus purus, in dapibus tortor ante quis dolor.
                    </p>

            <footer>
                <p>
                    Preço/hora
                            <strong>R$ 60,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="WhatsApp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    )
}

export default TeacherItem