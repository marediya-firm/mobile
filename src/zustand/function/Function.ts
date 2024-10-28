import { ZustandFnc } from '../export';
import { useHistoryZustand } from '../history/HistoryStore';
import { useHomeZustand } from '../home/HomeStore';

export const zustandFnc: ZustandFnc = {
  useHomeZustand,
  useHistoryZustand,
};
