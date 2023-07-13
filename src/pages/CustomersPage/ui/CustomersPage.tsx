import { useTranslation } from 'react-i18next'

const CustomersPage = () => {
	const { t } = useTranslation('customers')

	return <div>{t('Main')}</div>
}
export default CustomersPage
