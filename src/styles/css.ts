export const cssHideScrollbar = {
  "::-webkit-scrollbar": { width: 0, height: 0 },
  overflow: "-moz-scrollbars-none",
  "-ms-overflow-style": "none",
}

export const cssScrollbar = {
  '&::-webkit-scrollbar': {
    height: '8px',
    width: '8px',
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: '#C3F4FF',
    borderRadius: '99px',
    width: '8px',
    height: '8px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#019FC4',
    borderRadius: '99px',
  },
};

export const cssScrollbarHorizontal = {
  '&::-webkit-scrollbar': {
    height: '8px',
    width: '0px',
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: '#C3F4FF',
    borderRadius: '99px',
    height: '8px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#019FC4',
    borderRadius: '99px',
  },
};

export const cssScrollbarVertical = {
  '&::-webkit-scrollbar': {
    height: '0px',
    width: '8px',
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: '#C3F4FF',
    borderRadius: '99px',
    width: '8px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#019FC4',
    borderRadius: '99px',
  },
};