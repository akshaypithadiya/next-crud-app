import React from 'react';
import DeleteButton from './DeleteButton';
import Link from 'next/link';
import { HiPencilAlt } from 'react-icons/hi';

const TopicList = () => {
  return (
    <>
      <div className="p-4 border border-slate-300 flex justify-between gap-5 items-start">
        <div>
          <h2 className="font-bold text-2xl">Topic Title</h2>
          <div>Topic Description</div>
        </div>

        <div className="flex gap-2">
          <DeleteButton />
          <Link href={'/edit-topic/123'}>
            <HiPencilAlt size={24} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopicList;
