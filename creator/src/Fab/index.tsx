import FabMain from './Fab';
import FabLabel from './FabLabel';
import type { IFabComponentType } from './types';

export const createFab = (StyledFab: any, StyledFabLabel: any) => {
  const Fab: any = FabMain(StyledFab);
  Fab.Label = FabLabel(StyledFabLabel);

  Fab.displayName = 'Fab';

  // const Fab = FabTemp as IFabComponentType;
  return Fab;
};
