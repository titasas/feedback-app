import { FeedbackItem } from "./FeedbackItem";

export function FeedbackList({ feedback }) {
  if (!feedback || feedback.length === 0) {
    return <p>NO Feedback Yet</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
}
