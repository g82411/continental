import tw from "tailwind-styled-components"
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'; 

const Container = tw.div`
  hidden
  lg:flex
  lg:flex-1
  lg:justify-end
`
const Button = tw.a`
  text-sm
  font-semibold
  leading-6
  text-gray-900
`

const Icon = () => {
  return (
    <span aria-hidden="true">&rarr;</span>
  )
}

const Text = () => {
  const { t } = useTranslation();
  return (
    <span>{t('login')}</span>
  )
}


const Login = ({ onClick }) => {
  return (<Container>
    <Button onClick={onClick}>
      <Text />
      <Icon />
    </Button>
  </Container>)
}

Login.propTypes = {
  onClick: PropTypes.Function
}

export default Login