import { FiEdit } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import calculateProgressBarWidth from '../../utils/calculateWidth'
import { formatSavingsCurrency } from '../../utils/format'
import * as S from './styles'

const SavingsItem = ({ saving, showButton }) => {
  return (
    <S.Container>
      <S.SavingsBox>
        <span>{saving?.title}</span>
        {showButton && (
          <Link to={`/edit/saving/${saving._id}`} className="btn-edit">
            <FiEdit size={28} color="#FFFFFF" />
          </Link>
        )}
      </S.SavingsBox>
      <S.ContainerProgression>
        <S.Bar>
          <S.ProgressBar
            size={String(
              calculateProgressBarWidth(
                saving?.availableAmount,
                saving?.totalAmount
              )
            )}
          />
        </S.Bar>
        <S.MoneyText>
          <span className="currentMoney">
            {formatSavingsCurrency(saving?.availableAmount)}
          </span>
          <span className="totalMoney">
            /{formatSavingsCurrency(saving?.totalAmount)}
          </span>
        </S.MoneyText>
      </S.ContainerProgression>
    </S.Container>
  )
}

export default SavingsItem
