import { BaseProvider } from '@/app/types/sources'
import React from 'react'

function Provider({ provider: source, isSelected, disabled, onClick }: { provider: BaseProvider, isSelected: Boolean, disabled: boolean, onClick: () => void }) {
  return (
    <button
      disabled={disabled}
      className={`flex items-center justify-center bg-no-repeat bg-center bg-cover w-24 h-24 border-2 ${isSelected ? 'border-blue-500' : 'border-black'} p-2 box-border`}
      style={{ backgroundImage: `url(/icons/${source.icon})` }}
      onClick={() => { if (!disabled) { onClick() }}}
    />
  );
}

export default Provider