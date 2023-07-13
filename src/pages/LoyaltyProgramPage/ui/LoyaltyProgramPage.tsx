import { useTranslation } from 'react-i18next'

const LoyaltyProgramPage = () => {
	const { t } = useTranslation('loyalty')

	return <div>{t('Main')}</div>
}
export default LoyaltyProgramPage
