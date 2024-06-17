import React from 'react'
import './Nav.style.scss'
import { Stack, Typography, styled } from '@mui/material'

const navList = [
  { title: 'По проекту',
    icon: '/assets/nav-icon.png',
    isActive: false,
  },
  { title: 'Объекты',
    icon: '/assets/nav-icon.png',
    isActive: false,
  },
  { title: 'РД',
    icon: '/assets/nav-icon.png',
    isActive: false,
  },
  { title: 'МТО',
    icon: '/assets/nav-icon.png',
    isActive: false,
  },
  { title: 'СМР',
    icon: '/assets/nav-icon.png',
    isActive: true,
  },
  { title: 'График',
    icon: '/assets/nav-icon.png',
    isActive: false,
  },
  { title: 'МиМ',
    icon: '/assets/nav-icon.png',
    isActive: false,
  },
  { title: 'Рабочие',
    icon: '/assets/nav-icon.png',
    isActive: false,
  },
  { title: 'Капвложения',
    icon: '/assets/nav-icon.png',
    isActive: false,
  },
  { title: 'Бюджет',
    icon: '/assets/nav-icon.png',
    isActive: false,
  },
  { title: 'Финансирование',
    icon: '/assets/nav-icon.png',
    isActive: false,
  },
  { title: 'Панорамы',
    icon: '/assets/nav-icon.png',
    isActive: false,
  },
  { title: 'Камеры',
    icon: '/assets/nav-icon.png',
    isActive: false,
  },
  { title: 'Поручения',
    icon: '/assets/nav-icon.png',
    isActive: false,
  },
  { title: 'Контрагенты',
    icon: '/assets/nav-icon.png',
    isActive: false,
  },
]

const StyledNav = styled(Stack)({
  maxWidth: '234px',
  height: '94.5vh',
  borderRight: '1px solid #414144'
});

const StyledNavRow = styled(Stack)({
  paddingLeft: '20px', 
  paddingBottom: '5px',
  paddingTop: '5px',
  cursor: 'pointer'
});

const StyledNavDropDown = styled(Stack)({
  padding: '8px 8px 8px 20px',
  borderBottom: '1px solid #414144' 
});


export default function Nav() {
  return (
    <StyledNav direction="column">
      <StyledNavDropDown direction="row" justifyContent="space-between" alignItems="center" >
        <Stack direction="column">
          <Typography sx={{ fontSize: '14px', color: '#A1A1AA' }}>
            Название проекта
          </Typography>
          <Typography sx={{ fontSize: '10px', color: '#A1A1AA' }}> Аббревиатура</Typography>
        </Stack>
        <img src='/assets/arrow-icon.png' width={24} height={24}/>
      </StyledNavDropDown>
      <Stack direction="column" >
        {navList.map((item) => (
          <StyledNavRow 
            key={item.title} 
            direction="row" 
            alignItems="center" 
            spacing="14px"
            sx={{ backgroundColor: item.isActive ? '#A1A1AA' : 'transparent' }}
          >
            <img src={item.icon} width={22} height={22}/>
            <Typography sx={{ fontSize: '14px' }}>{item.title}</Typography>
          </StyledNavRow>

        ))}
      </Stack>
    </StyledNav>
  )
}
