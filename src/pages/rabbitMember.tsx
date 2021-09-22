import { RabbitMember as RabbitMemberType } from 'client';

interface RabbitMemberProps {
  rabbitMember: RabbitMemberType;
}

export default function RabbitMember({ rabbitMember }: rabbitMemberProps) {
  return (
    <div>
      <img
        src={rabbitMember?.profilePic.mediaItemUrl}
        alt={rabbitMember?.profilePic?.altText}
      />
      <h2>{rabbitMember?.fullName}</h2>
      <div
        className="bio"
        dangerouslySetInnerHTML={{ __html: rabbitMember?.bio }}
      />
    </div>
  );
}
