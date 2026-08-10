import { Callout } from "./Callout";
import { CodeBlock } from "./CodeBlock";

const h2 = "text-2xl md:text-[26px] font-semibold text-navy tracking-tight mt-14 mb-5 scroll-mt-28";
const h3 = "text-lg md:text-xl font-semibold text-navy tracking-tight mt-10 mb-4 scroll-mt-28";
const p = "text-[17px] leading-[1.75] text-ink/90 mb-5";
const ul = "list-disc pl-6 space-y-2.5 text-[17px] leading-[1.75] text-ink/90 mb-6 marker:text-accent";
const ol = "list-decimal pl-6 space-y-2.5 text-[17px] leading-[1.75] text-ink/90 mb-6 marker:text-navy marker:font-medium";
const code = "px-1.5 py-0.5 rounded-md bg-surface border border-border text-[0.85em] font-mono text-navy";

export function ArticleContent() {
  return (
    <div>
      <p className={p}>
        Running a language model on your own machine used to mean
        compromise — smaller models, slower output, and a noticeably worse
        experience than calling a hosted API. That gap has closed faster
        than most developer tooling usually moves, and it's changing how
        people actually build software day to day.
      </p>

      <blockquote className="border-l-2 border-accent pl-5 my-8 text-lg text-navy/80 italic leading-relaxed">
        The interesting shift isn't "local models are now good" — it's that
        the choice of where a model runs has become a normal, boring
        engineering decision, not a philosophical one.
      </blockquote>

      <h2 id="the-shift" className={h2}>
        The shift to local inference
      </h2>
      <p className={p}>
        Three things converged: quantized model formats got dramatically
        smaller without losing much quality, consumer GPUs (and Apple
        Silicon in particular) got fast enough to serve them, and the
        surrounding tooling — runners, model registries, inference servers
        — matured into something you can install in minutes rather than
        assemble from source.
      </p>
      <p className={p}>
        For a developer, that means a model can now sit quietly in the
        background of an editor, a terminal, or a build pipeline, with no
        network round-trip and no per-token bill.
      </p>

      <figure className="my-8">
        <div className="rounded-2xl overflow-hidden border border-border bg-surface aspect-[16/9] flex items-center justify-center group cursor-default">
          <div className="w-full h-full flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-[1.04] bg-gradient-to-br from-navy/[0.05] to-accent/[0.09]">
            <span className="text-xs font-medium text-ink-faint tracking-wide uppercase">
              Diagram placeholder
            </span>
          </div>
        </div>
        <figcaption className="mt-3 text-sm text-ink-faint text-center">
          A typical local-inference setup: editor, model runner, and a thin
          API layer in between.
        </figcaption>
      </figure>

      <h2 id="where-it-helps" className={h2}>
        Where it genuinely helps
      </h2>
      <p className={p}>
        Not every workflow benefits equally. In practice, the wins cluster
        around a few specific situations:
      </p>
      <ul className={ul}>
        <li>
          <strong className="text-navy font-medium">Fast, repetitive completions</strong> —
          inline suggestions and refactors where latency matters more than
          raw capability.
        </li>
        <li>
          <strong className="text-navy font-medium">Offline or air-gapped work</strong> —
          traveling, regulated environments, or codebases that can't leave
          the network.
        </li>
        <li>
          <strong className="text-navy font-medium">High-volume batch tasks</strong> —
          linting-style passes over thousands of files where API costs add
          up fast.
        </li>
        <li>
          <strong className="text-navy font-medium">Privacy-sensitive review</strong> —
          scanning logs or customer data you don't want leaving the machine.
        </li>
      </ul>

      <h3 className={h3}>A quick way to try it</h3>
      <p className={p}>
        Most local runners expose a familiar HTTP interface, so switching
        an existing script over is usually a one-line change:
      </p>

      <CodeBlock
        language="bash"
        code={`# install a local model runner
curl -fsSL https://get.local-llm.dev | sh

# pull a small, fast model
localllm pull qwen2.5-coder:7b

# serve it on an OpenAI-compatible endpoint
localllm serve --port 11434`}
      />

      <p className={p}>
        From there, point your existing client at{" "}
        <code className={code}>http://localhost:11434</code> instead of a
        hosted endpoint, and most SDKs work without further changes.
      </p>

      <Callout type="tip" title="Tip">
        Start with a 7B-class coding model before reaching for anything
        larger — the latency difference is often more noticeable than the
        quality difference for everyday completions.
      </Callout>

      <h2 id="trade-offs" className={h2}>
        Trade-offs to expect
      </h2>
      <p className={p}>
        None of this is free. Local inference trades a monthly bill for
        upfront hardware cost, and trades some raw capability for speed and
        control. The table below is a rough guide, not a benchmark.
      </p>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="bg-surface">
              <th className="px-5 py-3 font-semibold text-navy border-b border-border">
                Factor
              </th>
              <th className="px-5 py-3 font-semibold text-navy border-b border-border">
                Local model
              </th>
              <th className="px-5 py-3 font-semibold text-navy border-b border-border">
                Hosted API
              </th>
            </tr>
          </thead>
          <tbody className="text-ink-muted">
            <tr>
              <td className="px-5 py-3 border-b border-border font-medium text-navy">Latency</td>
              <td className="px-5 py-3 border-b border-border">Very low, no network hop</td>
              <td className="px-5 py-3 border-b border-border">Depends on region and load</td>
            </tr>
            <tr>
              <td className="px-5 py-3 border-b border-border font-medium text-navy">Cost model</td>
              <td className="px-5 py-3 border-b border-border">Upfront hardware, then free</td>
              <td className="px-5 py-3 border-b border-border">Pay per token</td>
            </tr>
            <tr>
              <td className="px-5 py-3 border-b border-border font-medium text-navy">Peak capability</td>
              <td className="px-5 py-3 border-b border-border">Trails frontier models</td>
              <td className="px-5 py-3 border-b border-border">Access to largest models</td>
            </tr>
            <tr>
              <td className="px-5 py-3 font-medium text-navy">Data exposure</td>
              <td className="px-5 py-3">Stays on device</td>
              <td className="px-5 py-3">Leaves the network</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout type="warning" title="Warning">
        Quantized models can degrade quietly on edge cases — long-context
        reasoning and precise arithmetic are common weak spots. Don't swap
        a hosted model for a local one in a production path without
        re-testing those cases specifically.
      </Callout>

      <h2 id="setting-up" className={h2}>
        Setting up a local toolchain
      </h2>
      <p className={p}>
        A minimal, reliable setup usually has three parts: a runner, a
        model, and a thin compatibility layer so existing tools don't need
        to know the difference. A sensible order to set it up in:
      </p>
      <ol className={ol}>
        <li>Install a runner that exposes an OpenAI-compatible API.</li>
        <li>Pull a small coding-focused model to start (7B–8B class).</li>
        <li>Point your editor extension or CLI at the local endpoint.</li>
        <li>Add a fallback to a hosted model for tasks the local one struggles with.</li>
        <li>Benchmark on your own repository, not a public leaderboard.</li>
      </ol>

      <Callout type="success" title="Success">
        Once the fallback is in place, most teams find they can route the
        majority of day-to-day completions locally and only reach for a
        hosted model on genuinely hard problems — cutting API spend
        noticeably without a workflow change.
      </Callout>

      <h2 id="looking-ahead" className={h2}>
        Looking ahead
      </h2>
      <p className={p}>
        The trend line is clear: local models will keep closing the gap on
        everyday tasks, while frontier hosted models keep pushing the
        ceiling on hard reasoning. The practical skill for developers isn't
        picking a side — it's building workflows flexible enough to use
        whichever one fits the task in front of them.
      </p>
    </div>
  );
}
