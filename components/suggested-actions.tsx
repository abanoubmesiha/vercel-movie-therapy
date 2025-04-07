'use client';

import { UseChatHelpers } from '@ai-sdk/react';
import { motion } from 'framer-motion';
import { memo } from 'react';
import { Button } from './ui/button';

interface SuggestedActionsProps {
  chatId: string;
  append: UseChatHelpers['append'];
}

function PureSuggestedActions({ chatId, append }: SuggestedActionsProps) {
  const suggestedActions = [
    {
      title: 'I want to feel like a king',
      label: 'give me movies about powerful men',
      action: 'I want to feel like a king, give me movies about powerful men.',
    },
    {
      title: 'I have a fight I should be prepared for',
      label: `give me motivational movies about fight heroes.`,
      action: `I have a fight I should be prepared for, give me motivational movies about fight heroes`,
    },
    {
      title: 'I want to quit my job',
      label: `give me a movie to help me accept or reject that.`,
      action: `I want to quit my job, give me a movie to help me accept or reject that.`,
    },
    {
      title: 'I like women or boys',
      label: 'movies have pretty sexy girls or boys.',
      action: 'I like women or boys, give me movies have pretty sexy girls or boys.',
    },
  ];

  return (
    <div
      data-testid="suggested-actions"
      className="grid sm:grid-cols-2 gap-2 w-full"
    >
      {suggestedActions.map((suggestedAction, index) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.05 * index }}
          key={`suggested-action-${suggestedAction.title}-${index}`}
          className={index > 1 ? 'hidden sm:block' : 'block'}
        >
          <Button
            variant="ghost"
            onClick={async () => {
              window.history.replaceState({}, '', `/chat/${chatId}`);

              append({
                role: 'user',
                content: suggestedAction.action,
              });
            }}
            className="text-left border rounded-xl px-4 py-3.5 text-sm flex-1 gap-1 sm:flex-col w-full h-auto justify-start items-start"
          >
            <span className="font-medium">{suggestedAction.title}</span>
            <span className="text-muted-foreground">
              {suggestedAction.label}
            </span>
          </Button>
        </motion.div>
      ))}
    </div>
  );
}

export const SuggestedActions = memo(PureSuggestedActions, () => true);
