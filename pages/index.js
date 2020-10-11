import { PrivateRoute } from "../features";

export default function IndexPage() {
  return (
    <PrivateRoute>
      <div>Это отображаться не должно</div>
    </PrivateRoute>
  );
}
