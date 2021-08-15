import { FC } from "react";

interface EntryProps {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  user: any;
  vote: any;
}

const Entry: FC<EntryProps> = () => {
  return (
    <div>
      Entry
    </div>
  )
}

export default Entry;