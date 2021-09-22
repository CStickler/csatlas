import { RabbitsIndv as RabbitsIndvType } from 'client';

interface RabbitIndvProps {
  rabbitIndv: RabbitIndvType;
}

export default function RabbitIndv({ rabbitIndv }: RabbitIndvProps) {
  return (
    <div>
      <img
        src={rabbitIndv?.profilePic.mediaItemUrl}
        alt={rabbitIndv?.profilePic?.altText}
      />
      <h2>{rabbitIndv?.fullName}</h2>
      <div
        className="bio"
        dangerouslySetInnerHTML={{ __html: rabbitIndv?.bio }}
      />
    </div>
  );
}
