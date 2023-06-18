import './Spinner.css'

export default function Spinner() {
    return (
        <div className='loading-wrapper'>
            <div className={`lds-ring`}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <p>Validando remessas...</p>
        </div>  
    )
}