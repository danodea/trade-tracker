export interface StatusPillProps {
  value: string;
}

export function StatusPill(props: StatusPillProps) {
  return <div className="rounded-full bg-red-500 px-2">{props.value}</div>;
}
