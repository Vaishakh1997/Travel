import React from 'react';
import { BiPaperPlane, BiTimeFive, BiNote } from 'react-icons/bi';

export default function getMessageStatus(status) {
  switch (status) {
    case 1:
      return <MessageSent />;
    case 2:
      return <MessageDraft />;
    case 3:
      return <MessageSchedule />;
    default:
      break;
  }
}

export function MessageSent() {
  return (
    <div className="flex items-center">
      <div className="p-1 rounded-full bg-green-anak">
        <BiPaperPlane className="h-4 w-4 text-white " />
      </div>
      <div className="ml-2">Sent</div>
    </div>
  );
}
export function MessageSchedule() {
  return (
    <div className="flex items-center">
      <div className="p-1 rounded-full bg-blue-anak">
        <BiTimeFive className="h-4 w-4 text-white" />
      </div>
      <div className="ml-2">Scheduled</div>
    </div>
  );
}
export function MessageDraft() {
  return (
    <div className="flex items-center">
      <div className="p-1 rounded-full bg-orange-anak">
        <BiNote className="h-4 w-4 text-white" />
      </div>
      <div className="ml-2">Draft</div>
    </div>
  );
}
