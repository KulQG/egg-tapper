import { IconArrow } from '@/icons/IconArrow'
import { Button } from '../Button/Button'
import { Link } from '@tanstack/react-router'

export const BackButton = () => {
  return (
    <Link to=".." viewTransition>
      <Button>
        <IconArrow />
      </Button>
    </Link>
  )
}
