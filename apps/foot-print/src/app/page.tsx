import { Test } from '@common/ui/components/Test';
import { Test2 } from '@common/ui/components/Test2';

export default function HomePage() {
  return (
    <section className="lg:w-1">
      <Test2 />
      <Test />
    </section>
  );
}
