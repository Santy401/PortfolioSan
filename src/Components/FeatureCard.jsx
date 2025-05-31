//-----//
import './Styles/target.css'
//-----//

const FeatureCard = ({ Icon, title, description }) => {
  return (
    <div className="targets">
      <Icon className="icon" />
      <label className="title-target">{title}</label>
      <p className="p-target">{description}</p>
    </div>
  )
}

export default FeatureCard
